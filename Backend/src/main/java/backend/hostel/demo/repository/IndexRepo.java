package backend.hostel.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import backend.hostel.demo.entity.Index;

public interface IndexRepo extends CrudRepository<Index, String> {
	@Query(value = "SELECT * FROM INDEX_OF_WE WHERE MONTH = ?1 AND YEAR = ?2", nativeQuery = true)
	public Iterable<Index> findAllByMonth(int month, int year);
	
	@Query(value = "SELECT * FROM INDEX_OF_WE WHERE ROOM_ID = ?1", nativeQuery = true)
	public Iterable<Index> findAllByRoom(String roomId);
	
	@Query(value = "SELECT * FROM INDEX_OF_WE WHERE ROOM_ID = ?1, MONTH = ?1, YEAR = ?3")
	public Index findByPrimaryKey(String roomId, int month, int year);
	
}
