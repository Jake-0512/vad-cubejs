cube(`UserVadminKakaoTargetingGenders`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_targeting_genders\``,
  
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
    targetingGenders: {
      sql: `${CUBE}.\`targeting.genders\``,
      type: `string`,
      title: `Targeting.genders`
    }
  },
  
  dataSource: `default`
});
