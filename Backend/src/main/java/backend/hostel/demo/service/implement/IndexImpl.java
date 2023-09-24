package backend.hostel.demo.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import backend.hostel.demo.dto.IndexDto;
import backend.hostel.demo.entity.Index;
import backend.hostel.demo.mapper.IndexMapper;
import backend.hostel.demo.repository.IndexRepo;
import backend.hostel.demo.service.IndexService;

@Component
public class IndexImpl implements IndexService {
	@Autowired
	private IndexRepo indexRepo;

	@Override
	public Iterable<IndexDto> getIndexes() {
		return IndexMapper.toDtoList(indexRepo.findAll());
	}

	@Override
	public Iterable<IndexDto> getIndexesByMonth(int month, int year) {
		return IndexMapper.toDtoList(indexRepo.findAllByMonth(month, year));
	}

	@Override
	public Iterable<IndexDto> getIndexesByRoom(String roomId) {
		return IndexMapper.toDtoList(indexRepo.findAllByRoom(roomId));
	}

	@Override
	public IndexDto createIndex(IndexDto indexDto) {
		Index index = new Index(indexDto.getRoomId(), indexDto.getMonth(), 
				indexDto.getYear(), indexDto.getIndexOfWater(), indexDto.getIndexOfElectricity());
		
		return IndexMapper.toDto(indexRepo.save(index));
	}

	@Override
	public IndexDto updateIndex(IndexDto indexDto) {
		Index old_index = indexRepo.findByPrimaryKey(indexDto.getRoomId(), indexDto.getMonth(), indexDto.getYear());
		
		if(old_index == null)
			return null;
		else {
			old_index = IndexMapper.toEntity(indexDto);
			
			return IndexMapper.toDto(indexRepo.save(old_index));
		}
	}

	@Override
	public IndexDto deleteIndex(String roomId, int month, int year) {
		Index index = indexRepo.findByPrimaryKey(roomId, month, year);
		indexRepo.delete(index);
		return IndexMapper.toDto(indexRepo.findByPrimaryKey(roomId, month, year));
	}

}
