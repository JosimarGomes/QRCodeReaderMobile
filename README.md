## Sobre o projeto

Com esse aplicativo, o usuário poderá ler um QRCode e ver as informações de um produto.
Além disso, o usuário poderá ver o histórico de todos os produtos que visualizou.

## Informações técnicas

* O aplicativo foi construído com React Native, porém testado e executado apenas no android.
* Para a leitura do QRCode, foi utilizada a biblioteca react-native-camera-kit, por ser mais simples de implementar
* Sobre a organização do projeto, foi usada uma estrutura bem simples com separação entre screens e components,
que atende o propósito.
* Sobre o login, foi usado um High Order Component para fazer a validação da sessão. A sessão na verdade se trata do simples
preenchimento do apelido de usuário.
* Sobre o design, foi reaproveitado uma parte do "design system" utilizado na web (apenas cores e fontes), além de ter sido usado
a biblioteca "Native Base" para a padronização de componentes.
* Para testar request para a máquina local, deve colocar o IP interno de rede da máquina como endereço

## Melhorias

* Tratamento de erros
* Testes unitários