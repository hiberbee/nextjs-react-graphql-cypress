type GraphqlResponse<T extends keyof Omit<Query, "__typename">> = {
  data: { [K in T]: Query[T] }
  errors: Maybe<{ name: string }[]>
}
