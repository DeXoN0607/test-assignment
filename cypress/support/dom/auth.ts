import * as data from '../../fixtures/auth';
import type { TOptions } from './types';

const getByClassName = (className: string, options?: TOptions) => {
  return cy.get(`.${className}`, options);
};


const getById = (id: string, options?: TOptions) => {
  return cy.get(`[id=${id}]`, options);
};

const getBtn = ( options?: TOptions) => {
  return cy.get("button", options);
};

const getUrl = ( options?: TOptions) => {
  return cy.url(options);
};

const getAuthForm = (options?: TOptions) => {
  return getByClassName(data.CLASS_AUTH_FORM, options);
};

const getInputEmail = (options?: TOptions) => {
  return getById(data.ID_EMAIL, options);
};

const getInputPassword = (options?: TOptions) => {
  return getById(data.ID_PASSWORD, options);
};

const auth = {
  getAuthForm,
  getInputEmail,
  getInputPassword,
  getBtn,
  getUrl,
};

export default auth;
