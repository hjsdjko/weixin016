package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShejirenwujiedanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwujiedanView;


/**
 * 设计任务接单
 *
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
public interface ShejirenwujiedanService extends IService<ShejirenwujiedanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShejirenwujiedanView> selectListView(Wrapper<ShejirenwujiedanEntity> wrapper);
   	
   	ShejirenwujiedanView selectView(@Param("ew") Wrapper<ShejirenwujiedanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShejirenwujiedanEntity> wrapper);
   	

}

