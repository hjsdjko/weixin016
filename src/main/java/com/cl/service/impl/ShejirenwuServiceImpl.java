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


import com.cl.dao.ShejirenwuDao;
import com.cl.entity.ShejirenwuEntity;
import com.cl.service.ShejirenwuService;
import com.cl.entity.view.ShejirenwuView;

@Service("shejirenwuService")
public class ShejirenwuServiceImpl extends ServiceImpl<ShejirenwuDao, ShejirenwuEntity> implements ShejirenwuService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShejirenwuEntity> page = this.selectPage(
                new Query<ShejirenwuEntity>(params).getPage(),
                new EntityWrapper<ShejirenwuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShejirenwuEntity> wrapper) {
		  Page<ShejirenwuView> page =new Query<ShejirenwuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShejirenwuView> selectListView(Wrapper<ShejirenwuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShejirenwuView selectView(Wrapper<ShejirenwuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
