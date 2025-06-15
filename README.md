# Full Stack Development Syllabus: TypeScript/React + .NET Core/Azure Functions

## Overview

This syllabus is designed to teach beginners full stack development using:

* **Frontend**: TypeScript + React hosted on Azure Web App
* **Backend**: .NET Core + C# + Azure Functions (HTTP API)

The plan assumes **1–2 hours of learning per day** and spans **60 days (12 weeks)**.

---

## Day-Wise Learning Plan

### Days 1–3: Development Environment Setup

* Install Node.js, .NET SDK, VS Code, Azure CLI
* Set up GitHub account + learn Git basics
* Install VS Code extensions (C#, Azure Functions, ESLint, Prettier)

### Days 4–6: Web Basics

* Learn HTML and CSS
* JavaScript essentials (variables, functions, arrays)
* Understand HTTP methods and REST API principles

### Days 7–9: TypeScript Essentials

* Basic types, interfaces, enums, generics
* ES6+ features (let/const, arrow functions, async/await)

### Days 10–13: React Fundamentals

* JSX and component basics
* Props and state
* Handling events and forms
* useState and useEffect hooks

### Days 14–17: React TODO App

* Build a simple TODO list with TypeScript
* Add, update, delete, and filter tasks
* Use local storage for persistence

### Days 18–20: Deploy React App to Azure Web App

* Create Azure Web App
* Build React app for production
* Deploy via GitHub Actions or Azure CLI
* Configure SPA routing and CORS

### Days 21–22: Introduction to .NET Core and C\#

* C# syntax: variables, methods, control flow
* Basic classes and data types

### Days 23–24: C# Collections and LINQ

* Lists, dictionaries, LINQ queries

### Days 25–27: Azure Functions Basics

* What is serverless computing?
* Create HTTP-triggered function apps
* Understand function.json, route templates
* Return JSON responses from functions

### Days 28–30: Error Handling & Logging

* Use ILogger in Azure Functions
* Error responses and HTTP status codes
* Local testing with Postman or curl

### Days 31–35: Create TODO API with Azure Functions

* Define models and in-memory data store
* CRUD operations: GET, POST, PUT, DELETE
* Organize code with folders and services

### Days 36–38: API Integration in React

* Use fetch/axios for API calls
* Call Azure Functions from React
* Handle loading, success, and error states
* Abstract API logic to custom hook or service

### Days 39–40: Environment Config

* Use .env files in React for API URLs
* CORS setup in Azure Function and Azure Web App

### Days 41–43: Authentication Concepts

* OAuth2 and OpenID Connect
* Azure AD app registration basics

### Days 44–47: Azure AD Authentication

* Secure Azure Function with Azure AD
* Integrate MSAL in React
* Acquire and send access tokens to API

### Days 48–50: CI/CD with GitHub Actions

* GitHub Actions overview
* Create workflows for React and Azure Functions
* Secrets management in GitHub

### Days 51–53: App Configuration & Secrets

* Use local.settings.json and environment variables
* Intro to Azure App Configuration
* Store secrets in Azure Key Vault (overview)

### Days 54–60: Capstone Project

* Pick and plan a small full stack project:

  * Task manager
  * Notes app
  * Bookmark organizer
* Build the app using skills learned
* Deploy frontend + backend to Azure
* Present and document project

---

## Bonus Topics (Optional)

* State management: React Context, Redux
* Unit testing: xUnit, React Testing Library
* Swagger/OpenAPI for API docs
* RBAC and claims-based auth
* Performance: lazy loading, memo, useCallback

---

## Learning Resources

* [Microsoft Learn](https://learn.microsoft.com)
* [React Docs](https://react.dev/learn)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
* [Azure Functions Docs](https://learn.microsoft.com/en-us/azure/azure-functions/)
* [C# Guide](https://learn.microsoft.com/en-us/dotnet/csharp/)
