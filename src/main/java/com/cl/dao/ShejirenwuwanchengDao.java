package com.cl.dao;

import com.cl.entity.ShejirenwuwanchengEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwuwanchengView;


/**
 * 设计任务完成
 * 
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
public interface ShejirenwuwanchengDao extends BaseMapper<ShejirenwuwanchengEntity> {
	
	List<ShejirenwuwanchengView> selectListView(@Param("ew") Wrapper<ShejirenwuwanchengEntity> wrapper);

	List<ShejirenwuwanchengView> selectListView(Pagination page,@Param("ew") Wrapper<ShejirenwuwanchengEntity> wrapper);
	
	ShejirenwuwanchengView selectView(@Param("ew") Wrapper<ShejirenwuwanchengEntity> wrapper);
	

}
