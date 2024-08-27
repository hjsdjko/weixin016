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


import com.cl.dao.ShejirenwujiedanDao;
import com.cl.entity.ShejirenwujiedanEntity;
import com.cl.service.ShejirenwujiedanService;
import com.cl.entity.view.ShejirenwujiedanView;

@Service("shejirenwujiedanService")
public class ShejirenwujiedanServiceImpl extends ServiceImpl<ShejirenwujiedanDao, ShejirenwujiedanEntity> implements ShejirenwujiedanService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShejirenwujiedanEntity> page = this.selectPage(
                new Query<ShejirenwujiedanEntity>(params).getPage(),
                new EntityWrapper<ShejirenwujiedanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShejirenwujiedanEntity> wrapper) {
		  Page<ShejirenwujiedanView> page =new Query<ShejirenwujiedanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShejirenwujiedanView> selectListView(Wrapper<ShejirenwujiedanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShejirenwujiedanView selectView(Wrapper<ShejirenwujiedanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
