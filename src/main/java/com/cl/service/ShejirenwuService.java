package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShejirenwuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwuView;


/**
 * 设计任务
 *
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
public interface ShejirenwuService extends IService<ShejirenwuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShejirenwuView> selectListView(Wrapper<ShejirenwuEntity> wrapper);
   	
   	ShejirenwuView selectView(@Param("ew") Wrapper<ShejirenwuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShejirenwuEntity> wrapper);
   	

}

