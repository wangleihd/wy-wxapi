'use strict';
/* 提供api数据的路由 */
module.exports = app => {
  const { router, controller, config } = app;
  /**
   * 金定文 实现的接口
  */
    // 首页依据热词搜索行程记录
  router.post(`/${config.version}/queryTripListByWord`, controller.jindw.queryTripListByWord);
    // 行程详情
  router.post(`/${config.version}/queryTripDetail`, controller.jindw.queryTripDetail);
    // 申请参团
  router.post(`/${config.version}/requestJoin`, controller.jindw.requestJoin);
    // 获取申请列表(对于发起人)
  router.post(`/${config.version}/queryTripApplyList`, controller.jindw.queryTripApplyList);
    // 发布人同意参团
  router.post(`/${config.version}/agreeJoin`, controller.jindw.agreeJoin);
    // 查询新状态
  router.post(`/${config.version}/myNews`, controller.jindw.myNews);
  /**
   * 范海亮 实现的接口
  */

  router.get(`/${config.version}/list`, controller.fanhl.list);

    // 发布人不同意参团
  router.post(`/${config.version}/notAgreeJoin`, controller.fanhl.notAgreeJoin);
    // 退出行程团
  router.post(`/${config.version}/leave`, controller.fanhl.leave);
    // 在当前行程下评论团中其他人
  router.post(`/${config.version}/merberComment`, controller.fanhl.merberComment);
    // 发布行程
  router.post(`/${config.version}/publishTrip`, controller.fanhl.publishTrip);
    // 草稿保存
  router.post(`/${config.version}/saveTrip`, controller.fanhl.saveTrip);
  //草稿发布
  router.post(`/${config.version}/publishSaveTrip`,controller.fanhl.publishSaveTrip)
  /**
   * 余宏图 实现的接口
  */
    // 用户发布的行程
  router.post(`/${config.version}/queryMyPublish`, controller.yuht.queryMyPublish);
    // 用户参与的同行
  router.post(`/${config.version}/queryMyTx`, controller.yuht.queryMyTx);
    // 我的草稿
  router.post(`/${config.version}/queryMyDraftList`, controller.yuht.queryMyDraftList);
    // 我的申请页面
  router.post(`/${config.version}/queryMyRequestList`, controller.yuht.queryMyRequestList);
    // 对于我的评论
  router.post(`/${config.version}/queryCommentToMe`, controller.yuht.queryCommentToMe);
};