# vue-project-demo

This repo is one of the microservices. Other related repo is <b>GoProjectDemo</b> and <b>ElasticSearchDemo</b>

Please setup the project under this order:

1. GoProjectDemo
2. ElasticSearchDemo
3. vue-project-demo

## Project create

```
vue create .
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Install Vueifty

```
vue add vuetify
```

# Q & A

## Q1: What is ESLint and why we need to use it?

Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it. The primary reason ESLint was created was to allow developers to create their own linting rules. It can also be usesd with githook so that it can check your code before commit automatically.

1.  Check syntax before running
2.  Prettier plugin can format your code
3.  Will suggest best practise code like using `let` instead of `var`, prefer `===` rather than `==`
4.  Warning unused import

## Q2: Why we need to use typescript rather than pure javascript?

Typescript can let use to define an interface (e.g. request param) and it will do a type validation during compilation. For example, it can help us to debug after we update our schema

## Q3: What is Vuetify?

Vuetif is the #1 component library for Vue.js and has been in active development since 2016

# Notes

## Note to use Vuetify

```
In order for your application to work properly, you must wrap it in a v-app component. This component is used for dynamically managing your content area and is the mounting point for many components.
```
