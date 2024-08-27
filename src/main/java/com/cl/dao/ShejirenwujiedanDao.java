package com.cl.dao;

import com.cl.entity.ShejirenwujiedanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwujiedanView;


/**
 * 设计任务接单
 * 
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
public interface ShejirenwujiedanDao extends BaseMapper<ShejirenwujiedanEntity> {
	
	List<ShejirenwujiedanView> selectListView(@Param("ew") Wrapper<ShejirenwujiedanEntity> wrapper);

	List<ShejirenwujiedanView> selectListView(Pagination page,@Param("ew") Wrapper<ShejirenwujiedanEntity> wrapper);
	
	ShejirenwujiedanView selectView(@Param("ew") Wrapper<ShejirenwujiedanEntity> wrapper);
	

}
