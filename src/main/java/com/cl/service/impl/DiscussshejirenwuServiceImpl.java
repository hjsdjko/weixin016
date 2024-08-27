package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.DiscussshejirenwuDao;
import com.cl.entity.DiscussshejirenwuEntity;
import com.cl.service.DiscussshejirenwuService;
import com.cl.entity.view.DiscussshejirenwuView;

@Service("discussshejirenwuService")
public class DiscussshejirenwuServiceImpl extends ServiceImpl<DiscussshejirenwuDao, DiscussshejirenwuEntity> implements DiscussshejirenwuService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussshejirenwuEntity> page = this.selectPage(
                new Query<DiscussshejirenwuEntity>(params).getPage(),
                new EntityWrapper<DiscussshejirenwuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussshejirenwuEntity> wrapper) {
		  Page<DiscussshejirenwuView> page =new Query<DiscussshejirenwuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<DiscussshejirenwuView> selectListView(Wrapper<DiscussshejirenwuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussshejirenwuView selectView(Wrapper<DiscussshejirenwuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
