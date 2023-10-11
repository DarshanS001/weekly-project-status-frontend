FROM node:18-alpine
WORKDIR weekly-project-status-frountend
COPY public/ /weekly-project-status-fountend/public
COPY src/ /weekly-project-status-fountend/src
COPY package.json /weekly-project-status-fountend/
RUN npm install

CMD ["npm","start"]
