# Sistema para aproveitamento de componentes e trabalhos para os estudantes de Engenharia Elétrica
# Contextualização
No panorama atual, é sabido que muitas disciplinas de Laboratório no curso de graduação em Engenharia Elétrica exigem dos discentes aporte financeiro para compra de materiais como resistores, capacitores, transistores, placas, controladores e outros mais, para realização dos projetos propostos em sala de aula. Corriqueiramente, esses componentes são comprados em grande volume - via de regra, todos juntos da turma ou algo do gênero, o que faz com que no fim do semestre, haja um acúmulo de itens restantes. 

Nesse contexto, propõem-se a implementação de um sistema web para facilitar a conexão entre estudantes que já cursaram as disciplinas e que estão cursando a fim de promover um ambiente de comercialização ou doação dos componentes eletrônicos necessários para os projetos. A plataforma permitirá que alunos registrem os materiais, promovendo uma dinâmica de troca entre os discentes e criando um espaço colaborativo que beneficia a todos. O impacto desse sistema será significativo: ao permitir que os estudantes adquiram componentes a preços acessíveis ou os recebam como doação, promove-se uma cultura de compartilhamento e sustentabilidade, reduzindo o desperdício e o custo de projetos acadêmicos. 

Desse modo, a plataforma poderá servir como um repositório de conhecimento, onde os alunos podem comercializar os seus componentes, e até mesmo compartilhar dicas e tutoriais sobre o seu uso, fomentando um ambiente de aprendizado mais colaborativo e engajador, além de ajudar a reduzir os custos financeiros decorrentes da participação em muitas das disciplinas práticas da engenharia elétrica. Em última análise, essa iniciativa não apenas melhora a experiência acadêmica, mas também prepara os futuros engenheiros para uma prática profissional mais consciente e responsável em relação ao uso dos recursos disponíveis.

A plataforma portanto apresentará as features de um marketplace, onde o usuário pode cadastrar o seu perfil, anunciar itens e visualizar os anunciados por outros usuários, entrar em contato com os vendedores, realizar compras e fazer avaliações.

Para implementar esse projeto, a equipe formada é composta por: 
 * Arthur Vieira de Assis Moreira: Frontend e banco de dados
 * Pedro Henrique Faluba Martins: Full Stack e banco de dados
 * Victor Guedes Batista: Backend e banco de dados

A plataforma será desenvolvida utilizando a linguagem JavaScript, tanto para o front-end quanto para o back-end, e utilizará o MySql como banco de dados. Além disso, serão utilizados os frameworks Node.js para desenvolvimento do back-end e React.js para desenvolvimento do front-end.

---

# Backlog do Produto

### Objetivo Geral:
O sistema web visa facilitar a conexão entre estudantes de Engenharia Elétrica que já cursaram disciplinas de Laboratório e os que estão cursando, promovendo um ambiente de comercialização ou doação de componentes eletrônicos. A plataforma permite que os estudantes registrem materiais, criando um ambiente colaborativo que incentiva a sustentabilidade e reduz os custos dos projetos acadêmicos.

### Histórias de Usuário:
1. **Como usuário, quero poder adicionar meu componente.**
2. **Como usuário, quero visualizar a lista de componentes disponíveis.**
3. **Como usuário, quero editar as informações de um componente que adicionei.**
4. **Como usuário, quero excluir um componente que não quero mais.**
5. **Como usuário, quero buscar componentes por nome ou categoria.**
6. **Como usuário, quero filtrar componentes por tipo (venda ou doação).**
7. **Como usuário, quero ver detalhes de um componente específico.**
8. **Como usuário, quero marcar um componente como vendido ou doado.**
9. **Como usuário, quero receber notificações sobre novos componentes adicionados.**
10. **Como usuário, quero poder criar um perfil para gerenciar meus componentes.**
11. **Como usuário, quero poder visualizar o histórico de transações (vendas/doações).**
12. **Como usuário, quero avaliar e deixar comentários sobre componentes que adquiri.**
13. **Como usuário, quero compartilhar a lista de componentes com meus colegas.**
14. **Como usuário, quero poder enviar mensagens a outros usuários sobre um componente.**
15. **Como usuário, quero cadastrar minha turma para facilitar a compra conjunta.**
16. **Como usuário, quero visualizar gráficos de componentes vendidos/doado por semestre.**
17. **Como usuário, quero um sistema de feedback para melhorar a experiência do usuário.**
18. **Como usuário, quero receber dicas sobre como usar os componentes.**
19. **Como usuário, quero relatar problemas com um componente (por exemplo, defeito).**
20. **Como usuário, quero poder importar/exportar minha lista de componentes.**

---

# Backlog da Sprint 1

### Objetivo da Sprint:
Permitir que os usuários consigam **gerenciar componentes** (CRUD), **visualizar detalhes de um componente**, **gerenciar seu perfil** (criação de conta e login), e garantir a **segurança dos dados**.

### Histórias de Usuário da Sprint 1:
1. **Gerenciamento de Componentes (CRUD)**:  
   - *Como usuário, quero poder adicionar, visualizar, editar e excluir meus componentes.*
   - **Critérios de Aceitação**:
     - O usuário deve ser capaz de adicionar um componente por meio de um formulário.
     - O sistema deve exibir uma lista de todos os componentes cadastrados.
     - O usuário deve poder editar as informações de um componente.
     - O usuário deve poder excluir um componente que não deseja mais.

2. **Visualizar Detalhes de um Componente**:  
   - *Como usuário, quero ver detalhes de um componente específico.*
   - **Critérios de Aceitação**:
     - O sistema deve exibir todas as informações do componente selecionado, como nome, descrição, tipo, categoria e quantidade.

3. **Cadastro e Gerenciamento de Perfil**:  
   - *Como usuário, quero poder criar um perfil para gerenciar meus componentes.*
   - **Critérios de Aceitação**:
     - O usuário deve ver um formulário de cadastro de perfil com campos como nome, e-mail e senha.
     - O sistema deve validar os campos de entrada (e-mail, senha, etc.).
     - O usuário deve ser capaz de fazer login e logout.

4. **Segurança dos Dados**:  
   - *Como usuário, quero que meus dados estejam seguros ao cadastrar meu perfil.*
   - **Critérios de Aceitação**:
     - O sistema deve criptografar senhas antes de armazená-las.
     - O sistema deve validar e-mail e senha ao fazer login.

---

### Distribuição das Tarefas da Sprint 1:

- **Arthur (Fullstack)**:
  - Criar front-end do formulário de cadastro de componentes (React.js).
  - Desenvolver a exibição da lista de componentes e da página de detalhes.
  - Criar front-end do formulário de cadastro de perfil (React.js).
  
- **Pedro (Fullstack)**:
  - Implementar validação de dados no front-end.
  - Conectar as chamadas da API para cadastro, edição, e exclusão de componentes.
  - Conectar a página de detalhes de um componente à API.
  - Implementar a autenticação no front-end.

- **Victor (Backend)**:
  - Desenvolver a API para o CRUD de componentes (Node.js).
  - Criar rota para buscar detalhes de um componente.
  - Desenvolver API para registro de usuários e login (Node.js).
  - Implementar criptografia de senhas e validação no back-end.

### Meta da Sprint:
- Ao final da Sprint 1, o usuário deve ser capaz de **gerenciar componentes** (CRUD), **visualizar detalhes de um componente específico**, **criar um perfil** e **fazer login/logout**. Todos os dados devem ser validados e armazenados com segurança no banco de dados.

### Diagramas UML 
**Administrador gerencia usuários e produtos**
![Diagrama UML - Administrador gerencia produtos e usuários_page-0001](https://github.com/user-attachments/assets/a9d5d4d5-d4f0-4fa0-9005-ef127f40812a)


**Usuário adiciona item no carrinho de compras**
![Diagrama UML - Usuário adiciona item no carrinho de compras_page-0001](https://github.com/user-attachments/assets/b3a9035c-b30f-4f4d-ab59-8c263718377c)

