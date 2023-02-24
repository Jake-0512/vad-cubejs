cube(`Users`, {
  sql: `SELECT * FROM vad.users`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
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
