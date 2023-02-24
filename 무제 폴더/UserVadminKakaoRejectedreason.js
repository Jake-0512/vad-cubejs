cube(`UserVadminKakaoRejectedreason`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_rejectedReason\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rejectedreasonRejectedtitle]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    rejectedreasonRejectedcontent: {
      sql: `${CUBE}.\`rejectedReason.rejectedContent\``,
      type: `string`,
      title: `Rejectedreason.rejectedcontent`
    },
    
    rejectedreasonRejectedtitle: {
      sql: `${CUBE}.\`rejectedReason.rejectedTitle\``,
      type: `string`,
      title: `Rejectedreason.rejectedtitle`
    }
  },
  
  dataSource: `default`
});
