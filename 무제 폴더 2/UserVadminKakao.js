cube(`UserVadminKakao`, {
  sql: `SELECT * FROM vad.\`user_Vadmin_kakao\``,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [advertiserName, apiId, bidstrategy, campaignName, campaignTrackid, createdDay, createddate, decodedprofileid, id, imageFilename, lastmodifieddate, name, ownercompanyName, profileimageFilename, profilename, scheduleBegindate, targetingAdaccountid, title, trackid, videoFilename, videoUrl, videoskippabletype]
    },
    
    bidamount: {
      sql: `${CUBE}.\`bidAmount\``,
      type: `sum`
    },
    
    campaignDailybudgetamount: {
      sql: `${CUBE}.\`campaign.dailyBudgetAmount\``,
      type: `sum`,
      title: `Campaign.dailybudgetamount`
    },
    
    creativecount: {
      sql: `${CUBE}.\`creativeCount\``,
      type: `sum`
    },
    
    dailybudgetamount: {
      sql: `${CUBE}.\`dailyBudgetAmount\``,
      type: `sum`
    },
    
    isoutofbalance: {
      sql: `${CUBE}.\`isOutOfBalance\``,
      type: `sum`
    }
  },
  
  dimensions: {
    _id: {
      sql: `_id`,
      type: `string`,
      primaryKey: true,
    },
    actionbutton: {
      sql: `${CUBE}.\`actionButton\``,
      type: `string`
    },
    
    advertiserBusinessregistrationnumber: {
      sql: `${CUBE}.\`advertiser.businessRegistrationNumber\``,
      type: `string`,
      title: `Advertiser.businessregistrationnumber`
    },
    
    advertiserName: {
      sql: `${CUBE}.\`advertiser.name\``,
      type: `string`,
      title: `Advertiser.name`
    },
    
    alttext: {
      sql: `${CUBE}.\`altText\``,
      type: `string`
    },
    
    apiId: {
      sql: `api_id`,
      type: `string`
    },
    
    assetgroups: {
      sql: `${CUBE}.\`assetGroups\``,
      type: `string`
    },
    
    bidstrategy: {
      sql: `${CUBE}.\`bidStrategy\``,
      type: `string`
    },
    
    campaignCampaigntypegoalCampaigntype: {
      sql: `${CUBE}.\`campaign.campaignTypeGoal.campaignType\``,
      type: `string`,
      title: `Campaign.campaigntypegoal.campaigntype`
    },
    
    campaignCampaigntypegoalGoal: {
      sql: `${CUBE}.\`campaign.campaignTypeGoal.goal\``,
      type: `string`,
      title: `Campaign.campaigntypegoal.goal`
    },
    
    campaignConfig: {
      sql: `${CUBE}.\`campaign.config\``,
      type: `string`,
      title: `Campaign.config`
    },
    
    campaignName: {
      sql: `${CUBE}.\`campaign.name\``,
      type: `string`,
      title: `Campaign.name`
    },
    
    campaignObjective: {
      sql: `${CUBE}.\`campaign.objective\``,
      type: `string`,
      title: `Campaign.objective`
    },
    
    campaignObjectiveDetailtype: {
      sql: `${CUBE}.\`campaign.objective.detailType\``,
      type: `string`,
      title: `Campaign.objective.detailtype`
    },
    
    campaignObjectiveType: {
      sql: `${CUBE}.\`campaign.objective.type\``,
      type: `string`,
      title: `Campaign.objective.type`
    },
    
    campaignObjectiveValue: {
      sql: `${CUBE}.\`campaign.objective.value\``,
      type: `string`,
      title: `Campaign.objective.value`
    },
    
    campaignStatusdescription: {
      sql: `${CUBE}.\`campaign.statusDescription\``,
      type: `string`,
      title: `Campaign.statusdescription`
    },
    
    campaignSystemconfig: {
      sql: `${CUBE}.\`campaign.systemConfig\``,
      type: `string`,
      title: `Campaign.systemconfig`
    },
    
    campaignTrackid: {
      sql: `${CUBE}.\`campaign.trackId\``,
      type: `string`,
      title: `Campaign.trackid`
    },
    
    campaigntypegoalCampaigntype: {
      sql: `${CUBE}.\`campaignTypeGoal.campaignType\``,
      type: `string`,
      title: `Campaigntypegoal.campaigntype`
    },
    
    campaigntypegoalGoal: {
      sql: `${CUBE}.\`campaignTypeGoal.goal\``,
      type: `string`,
      title: `Campaigntypegoal.goal`
    },
    
    config: {
      sql: `config`,
      type: `string`
    },
    
    createdDay: {
      sql: `created_day`,
      type: `string`
    },
    
    createddate: {
      sql: `${CUBE}.\`createdDate\``,
      type: `string`
    },
    
    creativestatus: {
      sql: `${CUBE}.\`creativeStatus\``,
      type: `string`
    },
    
    decodedprofileid: {
      sql: `${CUBE}.\`decodedProfileId\``,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    dynamictarget: {
      sql: `${CUBE}.\`dynamicTarget\``,
      type: `string`
    },
    
    extrasDetailmsg: {
      sql: `${CUBE}.\`extras.detailMsg\``,
      type: `string`,
      title: `Extras.detailmsg`
    },
    
    format: {
      sql: `format`,
      type: `string`
    },
    
    frequencycap: {
      sql: `${CUBE}.\`frequencyCap\``,
      type: `string`
    },
    
    frequencycaptype: {
      sql: `${CUBE}.\`frequencyCapType\``,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    imageFilename: {
      sql: `${CUBE}.\`image.fileName\``,
      type: `string`,
      title: `Image.filename`
    },
    
    imageUrl: {
      sql: `${CUBE}.\`image.url\``,
      type: `string`,
      title: `Image.url`
    },
    
    landinginfo: {
      sql: `${CUBE}.\`landingInfo\``,
      type: `string`
    },
    
    lastmodifieddate: {
      sql: `${CUBE}.\`lastModifiedDate\``,
      type: `string`
    },
    
    message: {
      sql: `message`,
      type: `string`
    },
    
    mobilelandingurl: {
      sql: `${CUBE}.\`mobileLandingUrl\``,
      type: `string`
    },
    
    msg: {
      sql: `msg`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    objective: {
      sql: `objective`,
      type: `string`
    },
    
    objectiveDetailtype: {
      sql: `${CUBE}.\`objective.detailType\``,
      type: `string`,
      title: `Objective.detailtype`
    },
    
    objectiveType: {
      sql: `${CUBE}.\`objective.type\``,
      type: `string`,
      title: `Objective.type`
    },
    
    objectiveValue: {
      sql: `${CUBE}.\`objective.value\``,
      type: `string`,
      title: `Objective.value`
    },
    
    opinionproof: {
      sql: `${CUBE}.\`opinionProof\``,
      type: `string`
    },
    
    optimizationstatus: {
      sql: `${CUBE}.\`optimizationStatus\``,
      type: `string`
    },
    
    ownercompanyBusinessregistrationnumber: {
      sql: `${CUBE}.\`ownerCompany.businessRegistrationNumber\``,
      type: `string`,
      title: `Ownercompany.businessregistrationnumber`
    },
    
    ownercompanyName: {
      sql: `${CUBE}.\`ownerCompany.name\``,
      type: `string`,
      title: `Ownercompany.name`
    },
    
    pacing: {
      sql: `pacing`,
      type: `string`
    },
    
    pclandingurl: {
      sql: `${CUBE}.\`pcLandingUrl\``,
      type: `string`
    },
    
    pricingtype: {
      sql: `${CUBE}.\`pricingType\``,
      type: `string`
    },
    
    profileimageFilename: {
      sql: `${CUBE}.\`profileImage.fileName\``,
      type: `string`,
      title: `Profileimage.filename`
    },
    
    profileimageUrl: {
      sql: `${CUBE}.\`profileImage.url\``,
      type: `string`,
      title: `Profileimage.url`
    },
    
    profilename: {
      sql: `${CUBE}.\`profileName\``,
      type: `string`
    },
    
    reviewstatus: {
      sql: `${CUBE}.\`reviewStatus\``,
      type: `string`
    },
    
    rspvlandingurl: {
      sql: `${CUBE}.\`rspvLandingUrl\``,
      type: `string`
    },
    
    scheduleBegindate: {
      sql: `${CUBE}.\`schedule.beginDate\``,
      type: `string`,
      title: `Schedule.begindate`
    },
    
    scheduleBegintime: {
      sql: `${CUBE}.\`schedule.beginTime\``,
      type: `string`,
      title: `Schedule.begintime`
    },
    
    servicecontent: {
      sql: `${CUBE}.\`serviceContent\``,
      type: `string`
    },
    
    smartmessage: {
      sql: `${CUBE}.\`smartMessage\``,
      type: `string`
    },
    
    statusdescription: {
      sql: `${CUBE}.\`statusDescription\``,
      type: `string`
    },
    
    systemconfig: {
      sql: `${CUBE}.\`systemConfig\``,
      type: `string`
    },
    
    targetingAdaccountid: {
      sql: `${CUBE}.\`targeting.adAccountId\``,
      type: `string`,
      title: `Targeting.adaccountid`
    },
    
    targetingAgetype: {
      sql: `${CUBE}.\`targeting.ageType\``,
      type: `string`,
      title: `Targeting.agetype`
    },
    
    targetingGendertype: {
      sql: `${CUBE}.\`targeting.genderType\``,
      type: `string`,
      title: `Targeting.gendertype`
    },
    
    targetingLocationtype: {
      sql: `${CUBE}.\`targeting.locationType\``,
      type: `string`,
      title: `Targeting.locationtype`
    },
    
    targetingType: {
      sql: `${CUBE}.\`targeting.type\``,
      type: `string`,
      title: `Targeting.type`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    trackid: {
      sql: `${CUBE}.\`trackId\``,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    videoFilename: {
      sql: `${CUBE}.\`video.fileName\``,
      type: `string`,
      title: `Video.filename`
    },
    
    videoUrl: {
      sql: `${CUBE}.\`video.url\``,
      type: `string`,
      title: `Video.url`
    },
    
    videoskippabletype: {
      sql: `${CUBE}.\`videoSkippableType\``,
      type: `string`
    }
  },
  
  dataSource: `default`
});
