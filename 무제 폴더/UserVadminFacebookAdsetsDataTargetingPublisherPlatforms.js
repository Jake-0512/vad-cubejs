cube(`UserVadminFacebookAdsetsDataTargetingPublisherPlatforms`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_facebook_adsets__data_targeting_publisher_platforms\``,
  
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
    adsetsDataTargetingPublisherPlatforms: {
      sql: `${CUBE}.\`adsets._data.targeting.publisher_platforms\``,
      type: `string`,
      title: `Adsets. Data.targeting.publisher Platforms`
    }
  },
  
  dataSource: `default`
});
