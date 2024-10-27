# pgats-ci-projeto-final

## Pré-requisitos

1. Instale o [git](https://git-scm.com)
2. Instale o [nodejs](https://nodejs.org/)
3. Instale o Yarn - `npm install -g yarn`
4. Faça uma cópia de algum projeto final da Pós (O escolhido foi o de API)
5. Instale as dependências
   ```shell
   cd Trabalho_Entregue_CI
   yarn
   ```
6. Instale os browsers e dependências
   ```shell
   yarn playwright install
   ```
7. Levante o serviço em uma janela diferente: /Trabalho_Entregue_CI/crud_clientes_node-main/backend
   ```shell
   node app.js
   ```
8. Execute os testes end-to-end com o Playwright (/Trabalho_Entregue_CI/trabalho-entregue) - isso vai gerar um relatório
   ```shell
   yarn run e2e
   ```   
9. Abra o relatório de cobertura de código em `reports/coverage/lcov-report`

---

💜⚡️
