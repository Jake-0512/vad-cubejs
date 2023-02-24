cube(`AdAccounts`, {
  sql: `SELECT * FROM vad.ad_accounts`,
  
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
      drillMembers: [clientId, userId, createdat, updatedat]
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
    
    clientId: {
      sql: `client_id`,
      type: `string`
    },
    
    clientSecret: {
      sql: `client_secret`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    refreshToken: {
      sql: `refresh_token`,
      type: `string`
    },
    
    userId: {
      sql: `user_id`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
