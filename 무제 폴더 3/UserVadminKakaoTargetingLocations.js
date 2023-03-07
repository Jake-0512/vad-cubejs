cube(`UserVadminKakaoTargetingLocations`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_targeting_locations\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [targetingLocationsDepth1name]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    targetingLocationsDepth1name: {
      sql: `${CUBE}.\`targeting.locations.depth1Name\``,
      type: `string`,
      title: `Targeting.locations.depth1name`
    },
    
    targetingLocationsDescription: {
      sql: `${CUBE}.\`targeting.locations.description\``,
      type: `string`,
      title: `Targeting.locations.description`
    },
    
    targetingLocationsValue: {
      sql: `${CUBE}.\`targeting.locations.value\``,
      type: `string`,
      title: `Targeting.locations.value`
    }
  },
  
  dataSource: `default`
});
