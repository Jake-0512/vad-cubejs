cube(`Insight`, {
  sql: `SELECT * FROM vad2.insight`,
  
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
    },

    ctrTotal: {
      type: `sum`,
      sql: ctr,
    },

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
    
    createdday: {
      sql: `${CUBE}.\`createdDay\``,
      type: `string`
    },
    
    datatype: {
      sql: `${CUBE}.\`dataType\``,
      type: `string`
    },
    
    userid: {
      sql: `${CUBE}.\`userId\``,
      type: `string`
    },

    ctr: {
      sql: `${CUBE}.\`ctr\``,
      type: `number`
    },

    cpc: {
      sql: `${CUBE}.\`cpc\``,
      type: `number`
    },

    clicks: {
      sql: `${CUBE}.\`clicks\``,
      type: `number`
    },

    spend: {
      sql: `${CUBE}.\`spend\``,
      type: `number`
    },

    cpm: {
      sql: `${CUBE}.\`cpm\``,
      type: `number`
    },

    impressions: {
      sql: `${CUBE}.\`impressions\``,
      type: `number`
    },

    reach: {
      sql: `${CUBE}.\`reach\``,
      type: `number`
    },

    frequency: {
      sql: `${CUBE}.\`frequency\``,
      type: `number`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    }
  },
  
  dataSource: `default`
});
