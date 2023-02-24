cube(`UserVadminKakaoStatus`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_status\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    status: {
      sql: `status`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
