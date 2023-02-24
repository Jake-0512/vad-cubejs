cube(`UserVadminGoogle`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_google\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [apiId, createdDay]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    apiId: {
      sql: `api_id`,
      type: `string`
    },
    
    createdDay: {
      sql: `created_day`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
