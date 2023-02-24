const customerTableNames = [
  //{ table: 'vad.users' },
  { table: 'vad.user_Vadmin_facebook' },
  { table: 'vad.user_Vadmin_google' },
  { table: 'vad.user_Vadmin_kakao' },
];

function unionData() {
  return customerTableNames.map( (p) => `select * from ${p.table}` ).join(' UNION ALL ');
}

cube(`Users`, {
  //sql: `SELECT * FROM vad.users`,
  sql: unionData(),
  // sql: ({ sqlBuilder, filters }) => {
  //   console.log('sqlBuilder =', sqlBuilder);
  //   console.log('filters =', filters);

  //   return `SELECT * FROM vad.users`

  //   const { user_id } = filters;
  //   console.log('user_id =', user_id);

  //   // id가 존재하면 table 이름을 변경합니다.
  //   if (user_id) {

  //     let query = sqlBuilder
  //       .select({
  //         table: 'vad.users',
  //       })
  //       .where({
  //         user_id: user_id
  //       });

  //     return query;

  //   } else {

  //     const tableList = sqlBuilder.getTableList().map(t => `${t} as ${t}_table`);
  //     const tables = tableList.join(', ');
  //     return `
  //       SELECT *
  //       FROM ${tables}
  //     `;

  //   }

  // },
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [companyName, serviceName, userId, createdat, updatedat]
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },

    apiId: {
      sql: `api_id`,
      type: `string`
    },

    companyName: {
      sql: `company_name`,
      type: `string`
    },
    
    companyRegNum: {
      sql: `company_reg_num`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
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
