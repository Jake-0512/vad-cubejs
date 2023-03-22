cube(`default`, {
    sql: `
        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            apiId,
            '총합' as title
        FROM 
            vad2.insight 

        UNION ALL

        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            apiId,
            'facebook' as title
        FROM 
            vad2.insight_facebook 

        UNION ALL
        
        SELECT 
            userId,
            ctr,
            cpc,
            clicks,
            spend,
            cpm,
            impressions,
            reach,
            frequency,
            createdAt,
            apiId,
            'google' as title
        FROM 
            vad2.insight_google 
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
        clicks: {
            type: `sum`,
            sql: `clicks`,
            title: `링크 클릭`,
        },
        totalSpend: {
          type: `sum`,
          sql: `spend`,
        },
        spend: {
          type: `number`,
          sql: `ROUND(${totalSpend}, 2)`,
          title: `지출 금액`,
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
          title: `노출`,
        },
        reach: {
            type: `sum`,
            sql: `reach`,
            title: `도달`,
        },
        // frequency: {
        //     type: `sum`,
        //     sql: `frequency`,
        // },
        frequency: {
          type: `number`,
          sql: `ROUND((${impressions}/${reach}), 2)`,
          title: `빈도`,
        },
      },
      
      dimensions: {

        _id: {
          sql: `_id`,
          type: `string`,
          primaryKey: true,
        },

        title: {
            sql: `title`,
            type: `string`,
            title: `광고소재`,
          },
        
        userId: {
          sql: `userId`,
          type: `string`,
        },  

        createdAt: {
            sql: `createdAt`,
            type: `time`
        }

      },

      
      dataSource: `default`
});