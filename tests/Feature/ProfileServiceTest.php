<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProfileServiceTest extends TestCase
{
    use RefreshDatabase;

    private $profiles;

    public function setUp(): void
    {
        parent::setUp();
        $this->profiles = factory(\App\Models\Profile::class, 5)->create();
    }

    public function testDatabase()
    {
        $this->assertDatabaseCount('profiles', count($this->profiles));
    }

    public function testAll()
    {
        $service = app()->make('App\Services\ProfileService');
        $profiles = $service->all([]);

        $this->assertNotEmpty($profiles);
        $this->assertCount(5, $profiles);
    }

    public function testAllWithFilters()
    {
        $service = app()->make('App\Services\ProfileService');
        $profiles = $service->all(['location_id' => $this->profiles[0]->location_id]);

        $this->assertNotEmpty($profiles);
        $this->assertCount(1, $profiles);
    }

    public function testGet()
    {
        $id = $this->profiles[0]->id;

        $service = app()->make('App\Services\ProfileService');
        $profile = $service->get($id);

        $this->assertNotNull($profile);
        $this->assertEquals($id, $profile->id);
    }

    public function testCreate()
    {
        $fakeProfile = factory(\App\Models\Profile::class)->make();

        $service = app()->make('App\Services\ProfileService');
        $profile = $service->create($fakeProfile->toArray());

        $this->assertNotEmpty($profile);
        $this->assertEquals($fakeProfile->first_name, $profile->first_name);
    }

    public function testUpdate()
    {
        $data = $this->profiles[0]->toArray();
        $data['phone_number'] = '040000000';
        $data['first_name'] = 'Test';

        $service = app()->make('App\Services\ProfileService');
        $profile = $service->update($data, $data['id']);

        $this->assertNotEmpty($profile);
        $this->assertEquals($data['first_name'], $profile->first_name);
        $this->assertEquals($data['phone_number'], $profile->phone_number);
    }

    public function testDelete()
    {
        $service = app()->make('App\Services\ProfileService');
        $id = $service->delete($this->profiles[0]->id);

        $this->assertEquals(1, $id);
        $this->assertDatabaseCount('profiles', count($this->profiles));
    }
}
