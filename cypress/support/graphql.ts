import type { ExecutionResult } from 'graphql';

export const CompaniesDocument = `
    query companies($input: Pagination) {
  allCompanies(input: $input) {
    id
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    companies(variables?: CompaniesQueryVariables, options?: C): Promise<ExecutionResult<CompaniesQuery, E>> {
      return requester<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, variables, options) as Promise<ExecutionResult<CompaniesQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;