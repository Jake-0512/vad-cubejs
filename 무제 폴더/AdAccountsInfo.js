cube(`AdAccountsInfo`, {
  sql: `SELECT * FROM vad.ad_accounts_info`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    Users: {
      sql: `${CUBE}.user_id = ${Users}.user_id`,
      relationship: `belongsTo`
    }
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
    accessToken: {
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
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
