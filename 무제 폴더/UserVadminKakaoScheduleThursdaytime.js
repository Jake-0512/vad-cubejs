cube(`UserVadminKakaoScheduleThursdaytime`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_schedule_thursdayTime\``,
  
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
    scheduleThursdaytime: {
      sql: `${CUBE}.\`schedule.thursdayTime\``,
      type: `string`,
      title: `Schedule.thursdaytime`
    }
  },
  
  dataSource: `default`
});
