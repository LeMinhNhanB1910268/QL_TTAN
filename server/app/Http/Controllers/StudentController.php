<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Resources\StudentCollection;
use App\Http\Resources\StudentResource;
use App\Models\Point;
use PHPUnit\Framework\MockObject\Builder\Stub;
use Illuminate\Support\Facades\DB;




class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new StudentCollection(Student::with('points')->paginate());
    }
    public function getFee($id)
    {
        return new StudentCollection(Student::where('nhom_id', $id)->with('tuitionfee')->get());
    }
    public function search($name) {
        return new StudentCollection(Student::where('name','like', $name)->get());
        // return $sex;
    }
    public function getCountStateFee($id)
    {
        $result = Student::where('nhom_id',$id)->join('tuitionfees','students.student_id','=', 'tuitionfees.student_id')->count();
        return $result;
    } 
    public function getStateFeeA($id)
    {
        $result = Student::where('nhom_id',$id)->join('tuitionfees','students.student_id','=', 'tuitionfees.student_id')->where('status','=','Đã đóng')->get();
        return $result;
    } 
    public function getCountStateFeeA($id)
    {
        $result = Student::where('nhom_id',$id)->join('tuitionfees','students.student_id','=', 'tuitionfees.student_id')->where('status','=','Đã đóng')->count();
        return $result;
    } 
    public function getStateFeeB($id)
    {
        $result = Student::where('nhom_id',$id)->join('tuitionfees','students.student_id','=', 'tuitionfees.student_id')->where('status','<>','Đã đóng')->get();
        return $result;
    } 
    public function getCountStateFeeB($id)
    {
        $result = Student::where('nhom_id',$id)->join('tuitionfees','students.student_id','=', 'tuitionfees.student_id')->where('status','<>','Đã đóng')->count();
        return $result;
    } 
    public function getReview($id)
    {
        return new StudentCollection(Student::where('nhom_id', $id)->with('review')->with('points')->get());
    }

    public function getCountReview($id)
    {
        $result = Student::where('nhom_id', $id)->with('review')->with('points')->count();
        return $result;
    }
    public function getCountReviewD($id)
    {
        $result = Student::where('nhom_id', $id)->with('review')->with('points')->where('target','=','dat')->count();
        return $result;
    }
    public function getCountReviewCD($id)
    {
        $result = Student::where('nhom_id', $id)->with('review')->with('points')->where('target','<>','dat')->count();
        return $result;
    }
    public function getReviewD($id)
    {
        $result = Student::where('nhom_id', $id)->with('review')->with('points')->where('target','=','dat')->get();
        return $result;
    }
    public function getReviewCD($id)
    {
        $result = Student::where('nhom_id', $id)->with('review')->with('points')->where('target','<>','dat')->get();
        return $result;
    }
    public function getPoint($id)
    {
        return new StudentCollection(Student::where('nhom_id', $id)->with('points')->get());
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'sex' => 'required',
            'birthday' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'birthday' => 'required',
        ]);
        $student = Student::create($request->all());
        return new StudentResource($student);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  Student $student
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new StudentResource(Student::with('points')->find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  Student $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  Student $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        $student->update($request->all());
        return new StudentResource($student);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  Student $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $student->delete();
    }
}
