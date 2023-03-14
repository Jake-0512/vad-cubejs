cube(`InsightGoogle`, {
  sql: `SELECT * FROM vad2.insight_google`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [apiid, createdday, userid, createdat]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    
    apiid: {
      sql: `${CUBE}.\`apiId\``,
      type: `string`
    },
    
    clicks: {
      sql: `clicks`,
      type: `string`
    },
    
    cpc: {
      sql: `cpc`,
      type: `string`
    },
    
    cpm: {
      sql: `cpm`,
      type: `string`
    },
    
    createdday: {
      sql: `${CUBE}.\`createdDay\``,
      type: `string`
    },
    
    ctr: {
      sql: `ctr`,
      type: `string`
    },
    
    datatype: {
      sql: `${CUBE}.\`dataType\``,
      type: `string`
    },
    
    frequency: {
      sql: `frequency`,
      type: `string`
    },
    
    impressions: {
      sql: `impressions`,
      type: `string`
    },
    
    reach: {
      sql: `reach`,
      type: `string`
    },
    
    spend: {
      sql: `spend`,
      type: `string`
    },
    
    userid: {
      sql: `${CUBE}.\`userId\``,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
