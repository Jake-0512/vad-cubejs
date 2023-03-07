cube(`UserVadminKakaoTargetingAges`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_targeting_ages\``,
  
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
    targetingAges: {
      sql: `${CUBE}.\`targeting.ages\``,
      type: `string`,
      title: `Targeting.ages`
    }
  },
  
  dataSource: `default`
});
