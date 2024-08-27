package com.cl.dao;

import com.cl.entity.ShejirenwuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShejirenwuView;


/**
 * 设计任务
 * 
 * @author 
 * @email 
 * @date 2024-04-09 11:33:39
 */
public interface ShejirenwuDao extends BaseMapper<ShejirenwuEntity> {
	
	List<ShejirenwuView> selectListView(@Param("ew") Wrapper<ShejirenwuEntity> wrapper);

	List<ShejirenwuView> selectListView(Pagination page,@Param("ew") Wrapper<ShejirenwuEntity> wrapper);
	
	ShejirenwuView selectView(@Param("ew") Wrapper<ShejirenwuEntity> wrapper);
	

}
