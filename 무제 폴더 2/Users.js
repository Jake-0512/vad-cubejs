cube(`Users`, {
  sql: `SELECT * FROM vad.users`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  // joins: {
  //   [`user_${Users.user_id}_facebook`]: {
  //     relationship: `hasMany`,
  //     sql: ({Users}, user_id) => `${Users} INNER JOIN users_${user_id}_facebook`,
  //   }
  // },

  measures: {
    count: {
      type: `count`,
      drillMembers: [companyName, serviceName, userId, createdat, updatedat]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },

    // apiIdFace: {
    //   sql: [`user_${Users.user_id}_facebook`]`.api_id`,
    //   type: `string`
    // },

    apiId: {
      sql: `api_id`,
      type: `string`
    },

    companyName: {
      sql: `company_name`,
      type: `string`
    },
    
    companyRegNum: {
      sql: `company_reg_num`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    serviceName: {
      sql: `service_name`,
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
