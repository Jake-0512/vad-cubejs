cube(`UserVadminKakaoContent`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao_content\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [contentId, contentName]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    contentConfig: {
      sql: `${CUBE}.\`content.config\``,
      type: `string`,
      title: `Content.config`
    },
    
    contentId: {
      sql: `${CUBE}.\`content.id\``,
      type: `string`,
      title: `Content.id`
    },
    
    contentMembertype: {
      sql: `${CUBE}.\`content.memberType\``,
      type: `string`,
      title: `Content.membertype`
    },
    
    contentName: {
      sql: `${CUBE}.\`content.name\``,
      type: `string`,
      title: `Content.name`
    },
    
    contentSystemconfig: {
      sql: `${CUBE}.\`content.systemConfig\``,
      type: `string`,
      title: `Content.systemconfig`
    },
    
    contentUserconfig: {
      sql: `${CUBE}.\`content.userConfig\``,
      type: `string`,
      title: `Content.userconfig`
    }
  },
  
  dataSource: `default`
});
