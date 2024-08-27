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


import com.cl.dao.ShejirenwuwanchengDao;
import com.cl.entity.ShejirenwuwanchengEntity;
import com.cl.service.ShejirenwuwanchengService;
import com.cl.entity.view.ShejirenwuwanchengView;

@Service("shejirenwuwanchengService")
public class ShejirenwuwanchengServiceImpl extends ServiceImpl<ShejirenwuwanchengDao, ShejirenwuwanchengEntity> implements ShejirenwuwanchengService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShejirenwuwanchengEntity> page = this.selectPage(
                new Query<ShejirenwuwanchengEntity>(params).getPage(),
                new EntityWrapper<ShejirenwuwanchengEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShejirenwuwanchengEntity> wrapper) {
		  Page<ShejirenwuwanchengView> page =new Query<ShejirenwuwanchengView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShejirenwuwanchengView> selectListView(Wrapper<ShejirenwuwanchengEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShejirenwuwanchengView selectView(Wrapper<ShejirenwuwanchengEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
