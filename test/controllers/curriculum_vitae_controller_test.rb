require 'test_helper'

class CurriculumVitaeControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get curriculum_vitae_home_url
    assert_response :success
  end

end
