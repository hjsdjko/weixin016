package com.cl.dao;

import com.cl.entity.DiscussshejirenwuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscussshejirenwuView;


/**
 * 设计任务评论表
 * 
 * @author 
 * @email 
 * @date 2024-04-09 11:33:40
 */
public interface DiscussshejirenwuDao extends BaseMapper<DiscussshejirenwuEntity> {
	
	List<DiscussshejirenwuView> selectListView(@Param("ew") Wrapper<DiscussshejirenwuEntity> wrapper);

	List<DiscussshejirenwuView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussshejirenwuEntity> wrapper);
	
	DiscussshejirenwuView selectView(@Param("ew") Wrapper<DiscussshejirenwuEntity> wrapper);
	

}
