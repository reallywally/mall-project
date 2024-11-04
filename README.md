# mall-project

### DB 생성

create database malldb;  
create user 'malldbuser'@'localhost' identified by 'malldbuser';  
create user 'malldbuser'@'%' identified by 'malldbuser';

grant all privileges on malldb.* to 'malldbuser'@'localhost';  
grant all privileges on malldb.* to 'malldbuser'@'%';

### front 설정

npm create vite@latest;  
project name: front  
framework: react  
varient: javascript  
cd front  
npm i  
npm run dev

npm install react-router-dom  
npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p   
npm install axios   

# vscode extension

ES7+ React/Redux/React-Native snippets  
ESLint  
Prettier - Code formatter  
 ctrl/command + , 하고 save로 검색해서 Editor: Format On Save 체크  
Tailwind CSS IntelliSense  
Error Lens
