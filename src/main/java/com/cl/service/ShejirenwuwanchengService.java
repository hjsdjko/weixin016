package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShejirenwuwanchengEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwuwanchengView;


/**
 * 设计任务完成
 *
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
public interface ShejirenwuwanchengService extends IService<ShejirenwuwanchengEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShejirenwuwanchengView> selectListView(Wrapper<ShejirenwuwanchengEntity> wrapper);
   	
   	ShejirenwuwanchengView selectView(@Param("ew") Wrapper<ShejirenwuwanchengEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShejirenwuwanchengEntity> wrapper);
   	

}

