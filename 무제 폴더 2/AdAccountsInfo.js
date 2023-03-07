cube(`AdAccountsInfo`, {
    sql: `SELECT * FROM vad.ad_accounts_info`,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
    },
    
    joins: {
    },
    
    measures: {
      count: {
        type: `count`,
        drillMembers: [userId, createdat]
      }
    },
    
    dimensions: {

      _id: {
        sql: `_id`,
        type: `string`,
        primaryKey: true,
      },

      access_token: {
        sql: `access_token`,
        type: `string`
      },
      
      authType: {
        sql: `auth_type`,
        type: `string`
      },
      
      refreshToken: {
        sql: `refresh_token`,
        type: `string`
      },
      
      tokenType: {
        sql: `token_type`,
        type: `string`
      },
      
      userId: {
        sql: `user_id`,
        type: `string`
      },
      
      createdat: {
        sql: `createdAt`,
        type: `time`
      }
    },
    
    //dataSource: `default`
  });
