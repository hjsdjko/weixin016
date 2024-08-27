package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.DiscussshejirenwuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscussshejirenwuView;


/**
 * 设计任务评论表
 *
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
public interface DiscussshejirenwuService extends IService<DiscussshejirenwuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussshejirenwuView> selectListView(Wrapper<DiscussshejirenwuEntity> wrapper);
   	
   	DiscussshejirenwuView selectView(@Param("ew") Wrapper<DiscussshejirenwuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussshejirenwuEntity> wrapper);
   	

}

