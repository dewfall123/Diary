# GraphQL

[PPT1](http://ppt.geekbang.org/slide/download?cid=55&pid=2791)
<br>
[PPT2](http://ppt.geekbang.org/slide/download?cid=55&pid=2776)
<br>
[PPT3(推荐)](http://ppt.geekbang.org/slide/download?cid=55&pid=2781)

### 1. GraphQL解决什么问题?

1. 请求多个API
2. 冗余字段
3. API文档更新不及时，甚至没有文档
4. 参数类型校验

### 2. 语法
[中文官网](https://graphql.cn/learn/)

### 3. 结合业务
我们业务数据库已`MongoDB`为主。
推荐使用`graphql-compose-mongoose`([git链接](https://github.com/graphql-compose/graphql-compose-mongoose))。

可以看到只需要差不多下面数量的代码就可以提供，可以直接提供常用的`curd`接口，我们需要提供的只有mongoose的modles对象（即提供`schema`创建model就行）。

```ts
    //获取mongooseModel
    const model = await this.modles.getByID(id);
    const ConfigTC = composeWithMongoose(model, {});

    // 注册Resolvers
    for (const field of this.queryFns) {
      schemaComposer.Query.addFields({
        [field]: ConfigTC.getResolver(field),
      });
    }
    // 返回graphqlSchema
    const graphqlSchema: GraphQLSchema = schemaComposer.buildSchema();
    return graphqlSchema;
```

```ts
  @get('/:id')
  async index(ctx: Context) {
    const { id } = ctx.params;
    const { query } = ctx.query;

    // 调用上面的生成graphqlSchema方法
    const graphqlSchema = await this.graphqlSchemas.getByID(id);
    // 调用`graphql`库
    const result = await graphql(graphqlSchema, query);
    ctx.body = result;
  }
```

前端传入类似参数:
```js
/*
data: {
    query: `
        {
            findMany() {
                id
                name
              }
            }
    `,
        },
 */

```

### 4. 安全问题
`GraphQL`让前端可以自由定义可以查询的字段，意味着我们需要对每个字段的`resolver`做权限控制。