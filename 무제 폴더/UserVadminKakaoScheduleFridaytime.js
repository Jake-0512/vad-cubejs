cube(`UserVadminKakaoScheduleFridaytime`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_schedule_fridayTime\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [scheduleFridaytime]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    scheduleFridaytime: {
      sql: `${CUBE}.\`schedule.fridayTime\``,
      type: `string`,
      title: `Schedule.fridaytime`
    }
  },
  
  dataSource: `default`
});
