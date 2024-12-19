<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->dateTime('launch');
            $table->enum('status', ['active','inactive','draft','archived']);
            $table->string('thumbLocation')->nullable();
            $table->foreignId('section_id')->constrained();
            $table->enum('medium',['image','video','html']);
            $table->text('html')->nullable();
            $table->string('mediaLocation')->nullable();
            $table->boolean('isPopular')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('features');
    }
};
