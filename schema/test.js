cube(`aa`, {
    sql: `
        SELECT 
            a.userId,
            a.clicks as clicks,
            a.apiId
        FROM 
            ${Default.sql()} a 
        
        UNION ALL 
        
        SELECT 
            b.userId, 
            b.\`data.clicks\` as clicks,
            b.apiId
        FROM 
            ${facebook.sql()} b
    `,
      
    preAggregations: {},
      
    joins: {},
      
      measures: {
        // ctr: {
        //     type: `sum`,
        //     sql: `ctr`,
        // },
        ctr: {
          type: `number`,
          sql: `ROUND((${clicks}/${impressions})*100, 2)`,
        },
        // cpc: {
        //     type: `sum`,
        //     sql: `cpc`,
        // },
        cpc: {
          type: `number`,
          sql: `ROUND((${spend}/${clicks}), 2)`,
        },
        totalSpend: {
          type: `sum`,
          sql: `spend`,
        },
        spend: {
          type: `number`,
          sql: `ROUND(${totalSpend}, 2)`,
        },
        // cpm: {
        //   type: `sum`,
        //   sql: `cpm`,
        // },
        cpm: {
          type: `number`,
          sql: `ROUND((${spend}/${impressions})*1000, 2)`,
        },
        impressions: {
          type: `sum`,
          sql: `impressions`,
        },
        reach: {
            type: `sum`,
            sql: `reach`,
        },
        // frequency: {
        //     type: `sum`,
        //     sql: `frequency`,
        // },
        frequency: {
          type: `number`,
          sql: `ROUND((${impressions}/${reach}), 2)`,
        },
      },
      
      dimensions: {

        _id: {
          sql: `_id`,
          type: `string`,
          primaryKey: true,
        },

        apiId: {
            sql: `apiId`,
            type: `string`,
          },
        
        userId: {
          sql: `userId`,
          type: `string`,
        },

        clicks: {
            sql: `clicks`,
            type: `string`,
        },

        createdAt: {
            sql: `createdAt`,
            type: `time`
        }

      },

      
      dataSource: `default`
});