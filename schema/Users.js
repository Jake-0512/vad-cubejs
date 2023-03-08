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
      drillMembers: [companyName, fbAdAccountId, fbBusinessId, fbPageId, fbPageName, fbPixelId, fbPixelName, serviceName, userId, createdat, updatedat]
    }
  },
  
  dimensions: {
    companyName: {
      sql: `company_name`,
      type: `string`
    },
    
    companyRegNum: {
      sql: `company_reg_num`,
      type: `string`
    },
    
    fbAdAccountId: {
      sql: `fb_ad_account_id`,
      type: `string`
    },
    
    fbBusinessId: {
      sql: `fb_business_id`,
      type: `string`
    },
    
    fbPageId: {
      sql: `fb_page_id`,
      type: `string`
    },
    
    fbPageName: {
      sql: `fb_page_name`,
      type: `string`
    },
    
    fbPixelId: {
      sql: `fb_pixel_id`,
      type: `string`
    },
    
    fbPixelName: {
      sql: `fb_pixel_name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    reportDone: {
      sql: `${CUBE}.\`report.done\``,
      type: `string`,
      title: `Report.done`
    },
    
    reportGoal: {
      sql: `${CUBE}.\`report.goal\``,
      type: `string`,
      title: `Report.goal`
    },
    
    reportOverall: {
      sql: `${CUBE}.\`report.overall\``,
      type: `string`,
      title: `Report.overall`
    },
    
    reportPlan: {
      sql: `${CUBE}.\`report.plan\``,
      type: `string`,
      title: `Report.plan`
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
