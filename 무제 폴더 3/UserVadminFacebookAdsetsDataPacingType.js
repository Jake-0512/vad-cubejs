cube(`UserVadminFacebookAdsetsDataPacingType`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_pacing_type\``,
  
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
    adsetsDataPacingType: {
      sql: `${CUBE}.\`adsets._data.pacing_type\``,
      type: `string`,
      title: `Adsets. Data.pacing Type`
    }
  },
  
  dataSource: `default`
});
